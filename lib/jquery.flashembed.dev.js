/*
* jQuery flashembed Plugin
* version: 0.1
* URL: http://github.com/BBB/jquery-flashembed
* Description: A jQuery interface for the SWFobject JS library.
* Requires: jQuery 1.3.2 (Untested on anything lower; but it'll probably work) & SWFObject http://code.google.com/p/swfobject/
* Author: Ollie Relph http://ollie.relph.me/ || ollie@relph.me
*/
(function($){    
    $.fn.flashembed = function(settings){
                
        settings = $.extend({
            width: 100, 
            height: 100,        
            bgColor: '#ffffff',
            params: {},
            flashvars: {},
            player: 'your.swf',
            flashVersion: '9.0.124',    
            expressInstaller: null,
            id: '',
            onFlashInit : function() {}
        }, settings || {});
             
        var counter = 1;
        			
        return this.each(function(){
        	var $this = $(this);
			if (window.swfobject) {
                this.id = settings.id.length <= 0 ? 'flashembed-' + counter++ : settings.id;                 		
				swfobject.embedSWF(settings.player, this.id, settings.width, settings.height, settings.flashVersion, settings.expressInstaller, settings.flashvars, settings.params, null, settings.onFlashInit);
			} else {
				alert('no SWFobject no fun :(');
			}
        });  
        
    };
})(jQuery);