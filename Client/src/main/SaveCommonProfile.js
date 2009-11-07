function SaveCommonProfile ()
{
	var Data = new ActiveXObject( 'Scripting.Dictionary' );
	Data.Add( 'aot', external.globals( 'aot' ) );
	Data.Add( 'authentication', external.globals( 'authentication' ) );
	Data.Add( 'autologin', external.globals( 'autologin' ) );
	Data.Add( 'encryption', external.globals( 'encryption' ) );
	Data.Add( 'installupdates', external.globals( 'installupdates' ) );
	Data.Add( 'language', external.globals( 'language' ) );
	Data.Add( 'last_address', external.globals( 'last_address' ) );
	Data.Add( 'last_autoupdate', external.globals( 'last_autoupdate' ) );
	Data.Add( 'last_password', external.globals( 'last_password_remember' ).toString() != 'true' ? '' : external.globals( 'last_password' ) );
	Data.Add( 'last_password_remember', external.globals( 'last_password_remember' ) );
	Data.Add( 'serveraddress', external.globals( 'serveraddress' ) );
	Data.Add( 'serverport', external.globals( 'serverport' ) );
	Data.Add( 'softwaretrack', external.globals( 'softwaretrack' ) );
	Data.Add( 'welcomescreen', external.globals( 'welcomescreen' ) );
	Data.Add( 'welcomesettings', external.globals( 'welcomesettings' ) );

	Data.Add( 'lastposx', external.wnd.left );
	Data.Add( 'lastposy', external.wnd.top );
	if ( external.wnd.width > 100 )
		Data.Add( 'lastwidth', external.wnd.width );
	if ( external.wnd.height > 100 )
		Data.Add( 'lastheight', external.wnd.height );

	hash2file( Data, external.globals( 'usersdir' ) + 'global.xml' );
}
