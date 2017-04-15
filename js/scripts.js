	function Button(text) {
		this.text = text || 'Hello';
	};
	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			$('body').append(this.$element);
		}
	};

	var btn1 = new Button('Hello');
	var btn2 = new Button('Welcome');
	var btn3 = new Button('Greetings');
	var btn4 = new Button('Here we are');

	btn1.create(); 
	btn2.create(); 
	btn3.create();
	btn4.create();