<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Villa on the Aegean - <?php echo $title ?></title>
    <?php if ($menuIndex == 4) {
        echo
        '<script src="/js/prototype.js" type="text/javascript"></script>'.
        '<script src="/js/scriptaculous.js?load=effects,builder" type="text/javascript"></script>'.
        '<script src="/js/lightbox.js" type="text/javascript"></script>'.
        '<link media="screen" href="/css/lightbox.css" type="text/css" rel="Stylesheet">';
    } ?>
    <link rel="Stylesheet" type="text/css" href="/css/styles.css" />
    <link type="image/x-icon" href="/favicon.ico" rel="shortcut icon">
</head>
<body>
    <div id="main_wrapper">
        <div id="header_container">
            <img src="<?php echo $headerImage ?>" style="width:382px;height:256px" />
        </div>
        <div id="main_nav">
            <?php require 'menu.php'; ?>
            <br clear="all" />
        </div>
        <div id="main_container">
            <div id="content_container">
                <div class="content">
                    <!--BEGIN CONTENT-->