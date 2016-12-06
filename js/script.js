var App = function () {
	var inicion = '#inicio';
	var presupuestos = '#presupuesto';
	var navegacion = '.navegacion';
	
	var comp_inicio = 'componentes/inicio.html';
	var comp_presupuestos = 'componentes/presupuestos.html';
	var comp_menu = 'componentes/menu.html';
	
	var initComponentes = function(selector,componente,callback){
		$(selector).load(componente, callback);
	};
	
	var refresh = function() {
		$('[data-role="page"]').trigger('create');
	};
	
	this.refreshNavegacion = function(){
		var pagina = $(':mobile-pagecontainer').pagecontainer('getActivePage').attr('id');
		
		$('[data-role="navbar"] a').removeClass('ui-btn-active');
		$('a[href="#'+pagina+'"]').addClass('ui-btn-active');
	};
	
	this.init = function(){
		initComponentes(inicio,comp_inicio, function(){
			initComponentes(navegacion, comp_menu, function(){
				refresh();
			});
		});
		
		initComponentes(presupuesto,comp_presupuestos, function(){
			initComponentes(navegacion, comp_menu, function(){
				refresh();
			});
		});
	};
};

$(document).on('pagechange', function(){
	var app =  new App();
    app.refreshNavegacion();
});

$(document).on('pagebeforeshow', function(){
	var app =  new App();
	app.init();	

	/*$('#inicio').load('componentes/inicio.html', function() {
	  $('.navegacion').load('componentes/menu.html', function() {	  
	     $('[data-role="page"]').trigger('create');
	  });
	});
	
	$('#presupuesto').load('componentes/presupuestos.html', function() {
	  $('.navegacion').load('componentes/menu.html', function() {	  
	     $('[data-role="page"]').trigger('create');
	  });
	});*/
});