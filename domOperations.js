let dom = {
	getElement: function(e) {
		if(typeof e == "string") {
			e = document.getElementById(e);
		}
		return e;
	},

	createElementWithClass: function(e, c) {
		let a = document.createElement(e);
		if(c !== undefined) {
			a.classList.add(c);
		}
		return a;
	},
	hideElement: function(e) {
		e = this.getElement(e);
		e.style.visibility = "hidden";
		e.style.display = "none";
	},
	hideElements: function(arr) {
		for(let a of arr) {
			this.hideElement(a);
		}
	},
	hideAShowB: function(a, b) {
		a = this.getElement(a);
		b = this.getElement(b);
		this.hideElement(a);
		this.showElement(b);
	},
	showElement: function(e) {
		e = this.getElement(e);
		e.style.visibility = "visible";
		e.style.display = "block";
	},
	hideChildren: function(e) {
		e = this.getElement(e);
		for (let i = e.children.length-1; i >= 0; i--) {
			this.hideElement(e.children[i]);
		}
	},
	killChildren: function(e) {
		e = this.getElement(e);
		for (let i = e.children.length-1; i >= 0; i--) {
			e.removeChild(e.children[i]);
		}
	},
	killElement: function(e) {
		e = this.getElement(e);
		e.parentNode.removeChild(e);
	},
	killClass: function(classname) {
		classes = document.getElementsByClassName(classname);
		for (let c of classes) {
			this.killElement(c);
		}
	}
	iframeLoaded: function(iframe) {
		let parent = iframe.parentElement
		this.showElement(parent);
		let a = iframe.contentWindow.document.body.scrollHeight;
		let b = 50;
		iframe.style.height = (a+b) + "px";
        this.hideElement(parent);
        iframe.contentWindow.document.body.style.overflowY = "hidden";
  	},
  	getImageSize: function (img, callback) {
  		console.log(img);
	    let wait = setInterval(
	    	function() {
		        let w = img.naturalWidth;
		        let h = img.naturalHeight;
		        if (w && h) {
		            clearInterval(wait);
		            callback.apply(this, [w, h, img]);
		            console.log(img);
	        	}
	    	}, 
	    30);
	},
	inputIsClean: function(string) {
		let a = new RegExp(/[<>*&|=\]\/]/);
		 return !a.test(string);
	},

	downloadFile: function(location, name) {
		let a = document.createElement("A");
		a.href=location;
		a.download=name;
		a.click();
	},

	changeElementBackgroundImage: function(e, source) {
		e = this.getElement(e);
		e.style.backgroundImage = `url(${source})`;
	},
	
	capitaliseFirstLetter(word) {
		capitalisedWord = word
		capital = word[0].toUpperCase();
		capitalisedWord[0] = capital;
		return capitalisedWord;
	},


}

