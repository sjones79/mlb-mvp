var showPitchVelocityMenu = function() {
    $("#pitchMenuSection").removeClass("notVisible").addClass("visible");
}

var showPitcherSelection = function () {
    $(".pitcherSelection").show();
}

var showHideGauges = function(option){
    $('.gauge').hide();
    
    var selectedOption = option.data('value');
    
    switch(selectedOption){
        case 'ch':
            $('#pitchSpeedGaugeCH').show();
            $('#spinRotationGaugeCH').show();
            $('#pitcherSpeedGaugeCH').show();
            $('#pitcherSpinGaugeCH').show();
        break;
        
        case 'cu':
            $('#pitchSpeedGaugeCU').show();
            $('#spinRotationGaugeCU').show();
            $('#pitcherSpeedGaugeCU').show();
            $('#pitcherSpinGaugeCU').show();
        break;
        
        case 'fc':
            $('#pitchSpeedGaugeFC').show();
            $('#spinRotationGaugeFC').show();
            $('#pitcherSpeedGaugeFC').show();
            $('#pitcherSpinGaugeFC').show();
        break;
        
        case 'ff':
            $('#pitchSpeedGaugeFF').show();
            $('#spinRotationGaugeFF').show();
            $('#pitcherSpeedGaugeFF').show();
            $('#pitcherSpinGaugeFF').show();
        break;
        
        case 'fs':
            $('#pitchSpeedGaugeFS').show();
            $('#spinRotationGaugeFS').show();
            $('#pitcherSpeedGaugeFS').show();
            $('#pitcherSpinGaugeFS').show();
        break;
        
        case 'ft':
            $('#pitchSpeedGaugeFT').show();
            $('#spinRotationGaugeFT').show();
            $('#pitcherSpeedGaugeFT').show();
            $('#pitcherSpinGaugeFT').show();
        break;
        
        case 'in':
            $('#pitchSpeedGaugeIN').show();
            $('#spinRotationGaugeIN').show();
            $('#pitcherSpeedGaugeIN').show();
            $('#pitcherSpinGaugeIN').show();
        break;
        
        case 'kc':
            $('#pitchSpeedGaugeKC').show();
            $('#spinRotationGaugeKC').show();
            $('#pitcherSpeedGaugeKC').show();
            $('#pitcherSpinGaugeKC').show();
        break;
        
        case 'si':
            $('#pitchSpeedGaugeSI').show();
            $('#spinRotationGaugeSI').show();
            $('#pitcherSpeedGaugeSI').show();
            $('#pitcherSpinGaugeSI').show();
        break;
        
        case 'sl':
            $('#pitchSpeedGaugeSL').show();
            $('#spinRotationGaugeSL').show();
            $('#pitcherSpeedGaugeSL').show();
            $('#pitcherSpinGaugeSL').show();
        break;
    }
    
            
                                                
}