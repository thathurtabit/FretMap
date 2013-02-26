
/* Author: Stephen Fairbanks for Ghosthorses.co.uk

*/

$(function() {

	//  Where everything has loaded
	$(window).load(function(){
		$('body').addClass('go');

	});


	// VARIABLES	
	// Check size of window on page load
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	// ON LOAD
	// CHECK SIZE, YO
	checkSize();

	// ON RESIZE
	// CHECK SIZE, YO
	$(window).resize(function() {
  		windowWidth = $(window).width();
		windowHeight = $(window).height();		
		checkSize();
	});

	// Checksize function
	function checkSize() {
		if (windowWidth <= 979) {
			$('html, body, *').unmousewheel();
		}
		if (windowWidth > 979) {
			$('html, body, *').mousewheel(function(e, delta) {
				this.scrollLeft -= (delta * 40);
				e.preventDefault();
			});			
		}
	}


	


	// LEFT HAND
	$('ul.select-hand li.left-hand a').click(function(e) {
		e.preventDefault();
		$('body').addClass('lefty');
		$('.select-hand li').removeClass('active');
		$(this).parent().addClass('active');
	});

	// RIGHT HAND
	$('ul.select-hand li.right-hand a').click(function(e) {
		e.preventDefault();
		$('body').removeClass('lefty');
		$('.select-hand li').removeClass('active');
		$(this).parent().addClass('active');
	});


	// VARS
	var listOfScales = "minor-blues pentatonic-minor major dorian chromatic";
	var listOfNotes = "e f fs g gs a bf b c cs d ds";

	// ---------------------------
	// WHEN SCALE IS CHANGED
	// ACTIVATE SELECTED SCALE
	$('ul.select-scale li.scale-minor-blues a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('minor-blues');
		$('#current-root-scale .scale').html('Minor Blues');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-pentatonic-minor a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('pentatonic-minor');
		$('#current-root-scale .scale').html('Pentatonic Minor');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-chromatic a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('chromatic');
		$('#current-root-scale .scale').html('Chromatic');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-dorian a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('dorian');
		$('#current-root-scale .scale').html('Dorian');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-mixolydian a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('mixolydian');
		$('#current-root-scale .scale').html('Mixolydian');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-major a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('major');
		$('#current-root-scale .scale').html('Major');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-jazz-minor a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('jazz-minor');
		$('#current-root-scale .scale').html('Jazz Minor');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-natural-minor a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('natural-minor');
		$('#current-root-scale .scale').html('Natural Minor');
		changeNotes(); // Change the notes given the current classes active
	});

	$('ul.select-scale li.scale-harmonic-minor a').click(function(e) {
		e.preventDefault();
		$('.select-scale li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-root').removeClass(listOfScales).addClass('harmonic-minor');
		$('#current-root-scale .scale').html('Harmonic Minor');
		changeNotes(); // Change the notes given the current classes active
	});

	
	// ---------------------------
	// WHEN NOTE IS CHANGED
	// ACTIVATE SELECTED NOTE

	// On Load
	changeNotes(); // Change the notes given the current classes active

	// SHOW E (on select)
	$('ul.select-root li.show-root-e a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('e');
		$('#current-root-scale .root').html('E');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW F
	$('ul.select-root li.show-root-f a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('f');
		$('#current-root-scale .root').html('F');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW F SHARP
	$('ul.select-root li.show-root-fs a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('fs');
		$('#current-root-scale .root').html('F sharp');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW G
	$('ul.select-root li.show-root-g a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('g');
		$('#current-root-scale .root').html('G');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW G SHARP
	$('ul.select-root li.show-root-gs a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('gs');
		$('#current-root-scale .root').html('G sharp');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW A
	$('ul.select-root li.show-root-a a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('a');
		$('#current-root-scale .root').html('A');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW B FLAT
	$('ul.select-root li.show-root-bf a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('bf');
		$('#current-root-scale .root').html('B flat');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW B
	$('ul.select-root li.show-root-b a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('b');
		$('#current-root-scale .root').html('B');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW DS
	$('ul.select-root li.show-root-ds a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('ds');
		$('#current-root-scale .root').html('D sharp');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW D
	$('ul.select-root li.show-root-d a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('d');
		$('#current-root-scale .root').html('D');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW C SHARP
	$('ul.select-root li.show-root-cs a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('cs');
		$('#current-root-scale .root').html('C sharp');
		changeNotes(); // Change the notes given the current classes active
	});

	// SHOW C
	$('ul.select-root li.show-root-c a').click(function(e) {
		e.preventDefault();
		$('.select-root li').removeClass('active');
		$(this).parent().addClass('active');
		$('ul.select-scale').removeClass(listOfNotes).addClass('c');
		$('#current-root-scale .root').html('C');
		changeNotes(); // Change the notes given the current classes active
	});


	// CHANGE NOTES FUNCTION
	function changeNotes() {
		// Remove notes
		$('.note').removeClass('on root'); 
		
		// CONDITIONAL
		// Minor Blues
		// ------------------------
		// E
		if (($('ul.select-root.minor-blues li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-minor-blues.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-g, .note-a, .note-bf, .note-b, .note-d').addClass('on');
		}
		// F
		else if (($('ul.select-root.minor-blues li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-minor-blues.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-gs, .note-bf, .note-b, .note-c, .note-ds').addClass('on');
		}
		// F#
		else if (($('ul.select-root.minor-blues li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-minor-blues.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-e, .note-a, .note-b, .note-c, .note-cs').addClass('on');
		}
		// G
		else if (($('ul.select-root.minor-blues li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-minor-blues.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-f, .note-bf, .note-c, .note-cs, .note-d').addClass('on');
		}
		// G#
		else if (($('ul.select-root.minor-blues li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-minor-blues.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-fs, .note-b, .note-cs, .note-d, .note-ds').addClass('on');
		}
		// A
		else if (($('ul.select-root.minor-blues li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-minor-blues.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-g, .note-e, .note-c, .note-d, .note-ds').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.minor-blues li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-minor-blues.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-e, .note-f, .note-gs, .note-ds, .note-cs').addClass('on');
		}
		// B
		else if (($('ul.select-root.minor-blues li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-minor-blues.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-e, .note-f, .note-fs, .note-a, .note-d').addClass('on');
		}
		// C
		else if (($('ul.select-root.minor-blues li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-minor-blues.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-ds, .note-f, .note-fs, .note-g, .note-bf').addClass('on');
		}
		// C#
		else if (($('ul.select-root.minor-blues li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-minor-blues.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-e, .note-fs, .note-g, .note-gs, .note-b').addClass('on');
		}
		// D
		else if (($('ul.select-root.minor-blues li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-minor-blues.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-f, .note-g, .note-gs, .note-a, .note-c').addClass('on');
		}
		// D#
		else if (($('ul.select-root.minor-blues li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-minor-blues.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-fs, .note-gs, .note-a, .note-as, .note-cs').addClass('on');
		}


		// CONDITIONAL
		// Pentatonic Minor
		// ------------------------
		// E
		if (($('ul.select-root.pentatonic-minor li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-pentatonic-minor.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-g, .note-a, .note-b, .note-d').addClass('on');
		}
		// F
		else if (($('ul.select-root.pentatonic-minor li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-pentatonic-minor.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-gs, .note-bf, .note-c, .note-ds').addClass('on');
		}
		// F#
		else if (($('ul.select-root.pentatonic-minor li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-pentatonic-minor.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-e, .note-a, .note-b, .note-cs').addClass('on');
		}
		// G
		else if (($('ul.select-root.pentatonic-minor li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-pentatonic-minor.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-f, .note-bf, .note-c, .note-d').addClass('on');
		}
		// G#
		else if (($('ul.select-root.pentatonic-minor li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-pentatonic-minor.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-fs, .note-b, .note-cs, .note-ds').addClass('on');
		}
		// A
		else if (($('ul.select-root.pentatonic-minor li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-pentatonic-minor.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-g, .note-e, .note-c, .note-d').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.pentatonic-minor li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-pentatonic-minor.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-f, .note-gs, .note-ds, .note-cs').addClass('on');
		}
		// B
		else if (($('ul.select-root.pentatonic-minor li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-pentatonic-minor.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-e, .note-fs, .note-a, .note-d').addClass('on');
		}
		// C
		else if (($('ul.select-root.pentatonic-minor li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-pentatonic-minor.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-f, .note-g, .note-bf, .note-as, .note-ds').addClass('on');
		}
		// C#
		else if (($('ul.select-root.pentatonic-minor li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-pentatonic-minor.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-e, .note-fs, .note-gs, .note-b').addClass('on');
		}
		// D
		else if (($('ul.select-root.pentatonic-minor li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-pentatonic-minor.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-f, .note-g, .note-a, .note-c').addClass('on');
		}
		// D#
		else if (($('ul.select-root.pentatonic-minor li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-pentatonic-minor.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-fs, .note-gs, .note-bf, .note-as, .note-cs').addClass('on');
		}



		// CONDITIONAL
		// Major
		// ------------------------
		// E
		if (($('ul.select-root.major li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-major.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-ds').addClass('on');
		}
		// F
		else if (($('ul.select-root.major li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-major.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-a, .note-bf, .note-c, .note-d, .note-e').addClass('on');
		}
		// F#
		else if (($('ul.select-root.major li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-major.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-as, .note-b, .note-cs, .note-ds, .note-f').addClass('on');
		}
		// G
		else if (($('ul.select-root.major li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-major.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-b, .note-c, .note-d, .note-e, .note-fs').addClass('on');
		}
		// G#
		else if (($('ul.select-root.major li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-major.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-g').addClass('on');
		}
		// A
		else if (($('ul.select-root.major li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-major.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-cs, .note-d, .note-e, .note-fs, .note-gs').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.major li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-major.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-d, .note-ds, .note-f, .note-g, .note-a').addClass('on');
		}
		// B
		else if (($('ul.select-root.major li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-major.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-bf').addClass('on');
		}
		// C
		else if (($('ul.select-root.major li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-major.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-e, .note-f, .note-g, .note-a, .note-b').addClass('on');
		}
		// C#
		else if (($('ul.select-root.major li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-major.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-c').addClass('on');
		}
		// D
		else if (($('ul.select-root.major li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-major.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-fs, .note-g, .note-a, .note-b, .note-cs').addClass('on');
		}
		// D#
		else if (($('ul.select-root.major li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-major.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-g, .note-gs, .note-bf, .note-c, .note-d').addClass('on');
		}



		// CONDITIONAL
		// Jazz Minor
		// ------------------------
		// E
		if (($('ul.select-root.jazz-minor li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-jazz-minor.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-g, .note-a, .note-b, .note-cs, .note-ds').addClass('on');
		}
		// F
		else if (($('ul.select-root.jazz-minor li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-jazz-minor.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-gs, .note-bf, .note-c, .note-d, .note-e').addClass('on');
		}
		// F#
		else if (($('ul.select-root.jazz-minor li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-jazz-minor.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-ds, .note-f').addClass('on');
		}
		// G
		else if (($('ul.select-root.jazz-minor li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-jazz-minor.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-bf, .note-c, .note-d, .note-e, .note-fs').addClass('on');
		}
		// G#
		else if (($('ul.select-root.jazz-minor li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-jazz-minor.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-b, .note-cs, .note-ds, .note-f, .note-g').addClass('on');
		}
		// A
		else if (($('ul.select-root.jazz-minor li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-jazz-minor.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-c, .note-d, .note-e, .note-fs, .note-gs').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.jazz-minor li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-jazz-minor.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-g, .note-a').addClass('on');
		}
		// B
		else if (($('ul.select-root.jazz-minor li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-jazz-minor.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-d, .note-e, .note-fs, .note-gs, .note-bf').addClass('on');
		}
		// C
		else if (($('ul.select-root.jazz-minor li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-jazz-minor.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-ds, .note-f, .note-g, .note-a, .note-b').addClass('on');
		}
		// C#
		else if (($('ul.select-root.jazz-minor li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-jazz-minor.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-bf, .note-c').addClass('on');
		}
		// D
		else if (($('ul.select-root.jazz-minor li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-jazz-minor.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-f, .note-g, .note-a, .note-b, .note-cs').addClass('on');
		}
		// D#
		else if (($('ul.select-root.jazz-minor li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-jazz-minor.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-c, .note-d').addClass('on');
		}



		// CONDITIONAL
		// Natural Minor
		// ------------------------
		// E
		if (($('ul.select-root.natural-minor li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-natural-minor.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-g, .note-a, .note-b, .note-c, .note-d').addClass('on');
		}
		// F
		else if (($('ul.select-root.natural-minor li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-natural-minor.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-gs, .note-bf, .note-c, .note-cs, .note-ds').addClass('on');
		}
		// F#
		else if (($('ul.select-root.natural-minor li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-natural-minor.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-d, .note-e').addClass('on');
		}
		// G
		else if (($('ul.select-root.natural-minor li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-natural-minor.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-bf, .note-c, .note-d, .note-ds, .note-f').addClass('on');
		}
		// G#
		else if (($('ul.select-root.natural-minor li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-natural-minor.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-b, .note-cs, .note-ds, .note-e, .note-fs').addClass('on');
		}
		// A
		else if (($('ul.select-root.natural-minor li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-natural-minor.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-c, .note-d, .note-e, .note-f, .note-g').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.natural-minor li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-natural-minor.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-fs, .note-gs').addClass('on');
		}
		// B
		else if (($('ul.select-root.natural-minor li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-natural-minor.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-d, .note-e, .note-fs, .note-g, .note-a').addClass('on');
		}
		// C
		else if (($('ul.select-root.natural-minor li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-natural-minor.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-ds, .note-f, .note-g, .note-gs, .note-bf').addClass('on');
		}
		// C#
		else if (($('ul.select-root.natural-minor li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-natural-minor.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-a, .note-b').addClass('on');
		}
		// D
		else if (($('ul.select-root.natural-minor li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-natural-minor.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-f, .note-g, .note-a, .note-bf, .note-c').addClass('on');
		}
		// D#
		else if (($('ul.select-root.natural-minor li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-natural-minor.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-b, .note-cs').addClass('on');
		}



		// CONDITIONAL
		// Harmonic Minor
		// ------------------------
		// E
		if (($('ul.select-root.harmonic-minor li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-harmonic-minor.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-g, .note-a, .note-b, .note-c, .note-ds').addClass('on');
		}
		// F
		else if (($('ul.select-root.harmonic-minor li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-harmonic-minor.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-gs, .note-bf, .note-c, .note-cs, .note-e').addClass('on');
		}
		// F#
		else if (($('ul.select-root.harmonic-minor li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-harmonic-minor.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-d, .note-f').addClass('on');
		}
		// G
		else if (($('ul.select-root.harmonic-minor li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-harmonic-minor.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-bf, .note-c, .note-d, .note-ds, .note-fs').addClass('on');
		}
		// G#
		else if (($('ul.select-root.harmonic-minor li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-harmonic-minor.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-b, .note-cs, .note-ds, .note-e, .note-g').addClass('on');
		}
		// A
		else if (($('ul.select-root.harmonic-minor li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-harmonic-minor.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-c, .note-d, .note-e, .note-f, .note-gs').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.harmonic-minor li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-harmonic-minor.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-fs, .note-a').addClass('on');
		}
		// B
		else if (($('ul.select-root.harmonic-minor li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-harmonic-minor.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-d, .note-e, .note-fs, .note-g, .note-as').addClass('on');
		}
		// C
		else if (($('ul.select-root.harmonic-minor li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-harmonic-minor.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-ds, .note-f, .note-g, .note-gs, .note-b').addClass('on');
		}
		// C#
		else if (($('ul.select-root.harmonic-minor li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-harmonic-minor.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-a, .note-c').addClass('on');
		}
		// D
		else if (($('ul.select-root.harmonic-minor li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-harmonic-minor.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-f, .note-g, .note-a, .note-bf, .note-cs').addClass('on');
		}
		// D#
		else if (($('ul.select-root.harmonic-minor li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-harmonic-minor.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-b, .note-d').addClass('on');
		}




		// CONDITIONAL
		// Mixolydian
		// ------------------------
		// E
		if (($('ul.select-root.mixolydian li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-mixolydian.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-d').addClass('on');
		}
		// F
		else if (($('ul.select-root.mixolydian li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-mixolydian.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-a, .note-bf, .note-c, .note-d, .note-ds').addClass('on');
		}
		// F#
		else if (($('ul.select-root.mixolydian li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-mixolydian.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-as, .note-b, .note-cs, .note-ds, .note-e').addClass('on');
		}
		// G
		else if (($('ul.select-root.mixolydian li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-mixolydian.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-b, .note-c, .note-d, .note-e, .note-f').addClass('on');
		}
		// G#
		else if (($('ul.select-root.mixolydian li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-mixolydian.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-fs').addClass('on');
		}
		// A
		else if (($('ul.select-root.mixolydian li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-mixolydian.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-cs, .note-d, .note-e, .note-fs, .note-g').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.mixolydian li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-mixolydian.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-d, .note-ds, .note-f, .note-g, .note-gs').addClass('on');
		}
		// B
		else if (($('ul.select-root.mixolydian li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-mixolydian.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-a').addClass('on');
		}
		// C
		else if (($('ul.select-root.mixolydian li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-mixolydian.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-e, .note-f, .note-g, .note-a, .note-bf').addClass('on');
		}
		// C#
		else if (($('ul.select-root.mixolydian li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-mixolydian.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-b').addClass('on');
		}
		// D
		else if (($('ul.select-root.mixolydian li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-mixolydian.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-fs, .note-g, .note-a, .note-b, .note-c').addClass('on');
		}
		// D#
		else if (($('ul.select-root.mixolydian li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-mixolydian.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-g, .note-gs, .note-bf, .note-c, .note-cs').addClass('on');
		}



		// CONDITIONAL
		// Dorian
		// ------------------------
		// E
		if (($('ul.select-root.dorian li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-dorian.active').length)) {
			$('.note-e').addClass('root');
			$('.note-e, .note-fs, .note-g, .note-a, .note-b, .note-cs, .note-d').addClass('on');
		}
		// F
		else if (($('ul.select-root.dorian li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-dorian.active').length)) {
			$('.note-f').addClass('root');
			$('.note-f, .note-g, .note-gs, .note-bf, .note-c, .note-d, .note-ds').addClass('on');
		}
		// F#
		else if (($('ul.select-root.dorian li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-dorian.active').length)) {
			$('.note-fs').addClass('root');
			$('.note-fs, .note-gs, .note-a, .note-b, .note-cs, .note-ds, .note-e').addClass('on');
		}
		// G
		else if (($('ul.select-root.dorian li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-dorian.active').length)) {
			$('.note-g').addClass('root');
			$('.note-g, .note-a, .note-bf, .note-c, .note-d, .note-e, .note-f').addClass('on');
		}
		// G#
		else if (($('ul.select-root.dorian li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-dorian.active').length)) {
			$('.note-gs').addClass('root');				
			$('.note-gs, .note-bf, .note-b, .note-cs, .note-ds, .note-f, .note-fs').addClass('on');
		}
		// A
		else if (($('ul.select-root.dorian li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-dorian.active').length)) {
			$('.note-a').addClass('root');			
			$('.note-a, .note-b, .note-c, .note-d, .note-e, .note-fs, .note-g').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.dorian li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-dorian.active').length)) {
			$('.note-bf').addClass('root');			
			$('.note-bf, .note-c, .note-cs, .note-ds, .note-f, .note-g, .note-gs').addClass('on');
		}
		// B
		else if (($('ul.select-root.dorian li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-dorian.active').length)) {
			$('.note-b').addClass('root');		
			$('.note-b, .note-cs, .note-d, .note-e, .note-fs, .note-gs, .note-b').addClass('on');
		}
		// C
		else if (($('ul.select-root.dorian li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-dorian.active').length)) {
			$('.note-c').addClass('root');		
			$('.note-c, .note-d, .note-ds, .note-f, .note-g, .note-a, .note-bf').addClass('on');
		}
		// C#
		else if (($('ul.select-root.dorian li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-dorian.active').length)) {
			$('.note-cs').addClass('root');			
			$('.note-cs, .note-ds, .note-e, .note-fs, .note-gs, .note-bf, .note-cs').addClass('on');
		}
		// D
		else if (($('ul.select-root.dorian li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-dorian.active').length)) {
			$('.note-d').addClass('root');			
			$('.note-d, .note-e, .note-f, .note-g, .note-a, .note-b, .note-c').addClass('on');
		}
		// D#
		else if (($('ul.select-root.dorian li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-dorian.active').length)) {
			$('.note-ds').addClass('root');			
			$('.note-ds, .note-f, .note-fs, .note-gs, .note-bf, .note-c, .note-cs').addClass('on');
		}
		


		// CONDITIONAL
		// Chromatic
		// ------------------------

		// E
		if (($('ul.select-root.chromatic li.show-root-e.active').length) && ($('ul.select-scale.e li.scale-chromatic.active').length)) {
			$('.note-e').addClass('root');
			$('.note').addClass('on');
		}
		// F
		else if (($('ul.select-root.chromatic li.show-root-f.active').length) && ($('ul.select-scale.f li.scale-chromatic.active').length)) {
			$('.note-f').addClass('root');
			$('.note').addClass('on');
		}
		// F#
		else if (($('ul.select-root.chromatic li.show-root-fs.active').length) && ($('ul.select-scale.fs li.scale-chromatic.active').length)) {
			$('.note-fs').addClass('root');
			$('.note').addClass('on');
		}
		// G
		else if (($('ul.select-root.chromatic li.show-root-g.active').length) && ($('ul.select-scale.g li.scale-chromatic.active').length)) {
			$('.note-g').addClass('root');
			$('.note').addClass('on');
		}
		// G#
		else if (($('ul.select-root.chromatic li.show-root-gs.active').length) && ($('ul.select-scale.gs li.scale-chromatic.active').length)) {
			$('.note-gs').addClass('root');
			$('.note').addClass('on');
		}
		// A
		else if (($('ul.select-root.chromatic li.show-root-a.active').length) && ($('ul.select-scale.a li.scale-chromatic.active').length)) {
			$('.note-a').addClass('root');
			$('.note').addClass('on');
		}
		// Bb
		else if (($('ul.select-root.chromatic li.show-root-bf.active').length) && ($('ul.select-scale.bf li.scale-chromatic.active').length)) {
			$('.note-bf').addClass('root');
			$('.note').addClass('on');
		}
		// B
		else if (($('ul.select-root.chromatic li.show-root-b.active').length) && ($('ul.select-scale.b li.scale-chromatic.active').length)) {
			$('.note-b').addClass('root');
			$('.note').addClass('on');
		}
		// C
		else if (($('ul.select-root.chromatic li.show-root-c.active').length) && ($('ul.select-scale.c li.scale-chromatic.active').length)) {
			$('.note-c').addClass('root');
			$('.note').addClass('on');
		}
		// C#
		else if (($('ul.select-root.chromatic li.show-root-cs.active').length) && ($('ul.select-scale.cs li.scale-chromatic.active').length)) {
			$('.note-cs').addClass('root');
			$('.note').addClass('on');
		}
		// D
		else if (($('ul.select-root.chromatic li.show-root-d.active').length) && ($('ul.select-scale.d li.scale-chromatic.active').length)) {
			$('.note-d').addClass('root');
			$('.note').addClass('on');
		}
		// D#
		else if (($('ul.select-root.chromatic li.show-root-ds.active').length) && ($('ul.select-scale.ds li.scale-chromatic.active').length)) {
			$('.note-ds').addClass('root');
			$('.note').addClass('on');
		}

	}
	// END CHANGE NOTES FUNCTION


});