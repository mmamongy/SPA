function Binding(b) {
    _this = this
    this.elementBindings = []
    this.value=b.object;
    this.valueGetter = function(){
        return _this.value;
    }
    this.valueSetter = function(val,model){
        for (var i = 0; i < _this.elementBindings.length; i++) {
            var binding=_this.elementBindings[i]
            binding.element[binding.attribute] = val;
            _this.value[model]=val;
        }
    }
    this.addBinding = function(element, attribute, event,model){
        var binding = {
            element: element,
            attribute: attribute,
            model:model
        }
        if (event){
            element.addEventListener(event, function(event){
                _this.value[model]=element[attribute];
            })
            binding.event = event
        }       
        this.elementBindings.push(binding)
        if (_this.value[model]) {
            element[attribute] = _this.value[model]
        }
       
        return _this
    }

    Object.assign(b.object, {
        get: this.valueGetter,
        set: this.valueSetter
    }); 
}