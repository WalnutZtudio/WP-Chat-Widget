<!-- 
WhatsHelp social widget
 -->

<script type="text/javascript">
	(function () {
		var options = {
			facebook: "890130504449776", // Facebook page ID
			whatsapp: "0994443333", // WhatsApp number
			viber: "walnutztudio", // Viber number
			snapchat: "walnutztudio", // Snapchat username
			line: "https://line.me/R/ti/p/@walnutztudio", // Line QR code URL
			telegram: "walnutztudio", // Telegram bot username
			vkontakte: "walnutztudio", // VKontakte page name
			email: "mail@walnutztudio.com", // Email
			sms: "0994443333", // Sms phone number
			call: "0994443333", // Call phone number
			company_logo_url:
			"//walnutztudio.com/wp-content/uploads/2018/08/logo-credit.png",
			// URL of company logo (png, jpg, gif)
			greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.",
			// Text of greeting message
			call_to_action: "Message us", // Call to action
			button_color: "#FF6550", // Color of button
			position: "right", // Position may be 'right' or 'left'
			order: "facebook,whatsapp,viber,snapchat,line,telegram,vkontakte,sms,call,email", // Order of buttons
		};
		var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
		var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
			s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
		var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
	})();
</script>