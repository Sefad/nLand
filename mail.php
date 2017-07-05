<?php
    function Send($url, $data){
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_URL, $url);
         curl_setopt($ch, CURLOPT_POST, true);
         curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
         curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
         curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // выводим ответ в переменную
         $res = curl_exec($ch);
         curl_close($ch);
         return $res;
     }
     // Формируем подпись к передаваемым в API данным
     function GetHash($params, $user_rs) {
         $params = http_build_query($params);
         $user_id = $user_rs['user_id'];
         $secret = $user_rs['user_rps_key'];
         $params = "$params::$user_id::$secret";
         return md5($params);
     }
	header('Content-Type: text/html; charset=utf-8', true);
	header('Access-Control-Allow-Origin: *');
	// пустой ответ
	$response = null;
	if (!empty($_POST)){
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = trim($_POST['phone']);
		$email = htmlspecialchars(trim($_POST['email']));
		$yam = htmlspecialchars(trim($_POST['yam']));
		if($name == '' || strlen($name) < 2) {
			$error['name'] = "Введите имя!";
		};
		if($phone == '') {
			$error['phone'] = "Введите свой телефон!";
		} else if(!preg_match("/8\ \([0-9]{3,3}\)\ [0-9]{3,3}-[0-9]{4,4}/", $phone)) {
		    $error['phone'] = "Введите телефон в требуемом формате";
		};
		if($email == '') {
            $error['email'] = "Введите свой E-mail!";
        } else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error['email'] = "Введите корректный e-mail";
        };
		if(!empty($error)) {
			print_r(implode('<br> ',$error));
		} else {
		$user_rs = array();
            $user_rs['user_id'] = 'globfinance';
            $user_rs['user_rps_key'] = '2896946253bff55b722c3dc4021bd218';

            $send_data = array(
                'rid[0]' => '1479737305.3304747171',
                'lead_name' => $name,
                'lead_email' => $email,
                'lead_phone' => $phone,
                'tag' => $yam
            );
                $send_data['hash'] = GetHash($send_data, $user_rs);
                $resp = json_decode(Send('http://globfinance.justclick.ru/api/AddLeadToGroup', $send_data));
            if($resp->error_code == 0) {
                echo "<script>yaCounter44006659.reachGoal('getLid');</script><div style='text-align:center'>Спасибо!<br/>Мы выслали вам список самых доходных акций второго квартала 2017 года на указанный адрес электронной почты.</div><script>ga('send', {hitType: 'event',eventAction: 'getLid'});</script>";
            } else {
                echo "Ошибка код:{$resp->error_code} - описание: {$resp->error_text}";
            }
	    }
    }
?>