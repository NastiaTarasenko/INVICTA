<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $userMessage = $_POST['message'];

    // $toMail = "invicta.itco@gmail.com";
    $toMail = "nastia.tarasenko993@gmail.com";
    $subject = 'Нове повідомлення з форми зв\'язку';
    $body = "Ім'я: $userName \r\n Email:  $userEmail \r\n Повідомлення: \r\n $userMessage";
    if (empty($userName)) {
        exit();
        header("Location: html/index.html");
    }
    if (empty($userEmail)) {
        exit();
        header("Location: html/index.html");
    }
    if (empty($userMessage)) {
        exit();
        header("Location: html/index.html");
    }
    if (mail($toMail, $subject, $body)) {
        echo '<h2>Thank you! Your message has been sent.</h2>';
    } else {
        echo '<h2>Something is wrong! Try again,</h2>';
    }
    // header("Location: html/index.html");
}
else {
    header("Location: html/index.html");
}

?>
