var showPitchVelocityMenu = function() {
    $("#pitchMenuSection").removeClass("notVisible").addClass("visible");
}

var showHideGauges = function(option){
    $('.gauge').hide();
    
    var selectedOption = option.data('value');
    
    switch(selectedOption){
        case 'ch':
            $('#pitchSpeedGaugeCH').show();
            $('#spinRotationGaugeCH').show();
        break;
        
        case 'cu':
            $('#pitchSpeedGaugeCU').show();
            $('#spinRotationGaugeCU').show();
        break;
        
        case 'fc':
            $('#pitchSpeedGaugeFC').show();
            $('#spinRotationGaugeFC').show();
        break;
        
        case 'ff':
            $('#pitchSpeedGaugeFF').show();
            $('#spinRotationGaugeFF').show();
        break;
        
        case 'fs':
            $('#pitchSpeedGaugeFS').show();
            $('#spinRotationGaugeFS').show();
        break;
        
        case 'ft':
            $('#pitchSpeedGaugeFT').show();
            $('#spinRotationGaugeFT').show();
        break;
        
        case 'in':
            $('#pitchSpeedGaugeIN').show();
            $('#spinRotationGaugeIN').show();
        break;
        
        case 'kc':
            $('#pitchSpeedGaugeKC').show();
            $('#spinRotationGaugeKC').show();
        break;
        
        case 'si':
            $('#pitchSpeedGaugeSI').show();
            $('#spinRotationGaugeSI').show();
        break;
        
        case 'sl':
            $('#pitchSpeedGaugeSL').show();
            $('#spinRotationGaugeSL').show();
        break;
            

    }
    
            
                                                
}