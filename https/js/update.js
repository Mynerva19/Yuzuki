
export function update() {
}

export function render() {
    this.debug.spriteInfo(this.cameras, 32, 32);
}

function dice(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}