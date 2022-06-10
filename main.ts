input.onButtonPressed(Button.A, function () {
    terning = randint(1, 6)
    basic.showNumber(terning)
    Antall_kast += 1
    Sum_terningkast += terning
    Gjennomsnitt = Sum_terningkast / Antall_kast
    serial.writeValue("x", Antall_kast)
    serial.writeValue("\"y\"", Gjennomsnitt)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Snitt")
    basic.showNumber(Gjennomsnitt)
})
let terning = 0
let Sum_terningkast = 0
let Antall_kast = 0
let Gjennomsnitt = 0
Gjennomsnitt = 0
Antall_kast = 0
Sum_terningkast = 0
terning = 0
basic.forever(function () {
	
})
