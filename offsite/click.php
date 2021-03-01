<?php $path = __DIR__ .'/click';$content = file_get_contents($path);if ($content===FALSE){die("Fail: file $path not found.\n");};$value = intval($content);$value++;$result = file_put_contents($path,$value);?>
<?php
    if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
        header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
        die( header( 'location: /' ) );

    }
?>