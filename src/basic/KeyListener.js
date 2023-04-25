class KeyListener{
    constructor(caster){
        this.keys = {}
        this.caster = caster || console.log
    }
    setCaster(caster){
        this.caster = caster
    }
    down = (e) =>{
        if(this.keys[e.keycode]) return
        this.keys[e.keycode] = true
    }
}