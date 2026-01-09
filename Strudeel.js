$: note(arrange(
  [4, `g5 | e5 | c5 | b5 | g5`],
  [4, `g6 | e6 | c6 | b6 | g6`],
  [4, `<c4 e4 g4 b4>*4`],
  [4, stack(`<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`, 
              `<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`.add(`5`))],
  [4, `<c4 e4 g4 b4>*4`],
  [4, stack(`<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`, 
              `<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`.add(`5`))],
  [4, stack(`<g5 e5 c5 b5 g5 e5 c5 b5 g5 c5 e5 b5 g4 e4 g4 g5>*8`, 
              `<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`.add(`5`))],
  [4, `g5 | e5 | c5 | b5 | g5`],
  [4, `g6 | e6 | c6 | b6 | g6`]
)).sound("piano").lpf(2000)._scope()

$: note(arrange(
  [8, `<~ ~ ~ ~ ~ ~ ~ c4>*4 | <~ ~ ~ ~ ~ ~ ~ g4>*4`],
  [4, `<b4 c4 e4 f4 a5>*8`],
  [4, `<a2 f3 e3 c3 g4>*8`],
  [4, `<b4 c4 e4 f4 a5>*8`],
  [4, `<a2 f3 e3 g4>*8`],
  [4, `<a2 f3 e3 g4>*8`],
  [8, `~`],
)).sound(choose("square", "sawtooth")).rarely(ply("2 | 4 | 8")).size(3).lpf(slider(990,0,1000,1)).lpa(.2)._scope()

$: note("<[c3,g3,c4] [g3,b3,d3]>").s("gm_electric_guitar_clean").lpf(slider(1000,0,1000,1))._scope()

$: sound(arrange(
  [8, "<bd hh bd hh>*4"],
  [20, "<bd hh bd rim>*4"],
  [8, "<bd hh bd hh>*4"]
)).rarely(ply("2 | 4")).lpf(slider(660,0,1000,1))._scope()

$: note(arrange(
  [8, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [4, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [8, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
)).sound("gm_synth_bass_1").lpf(slider(398,0,1000,1))._scope()
$: note(`<
c e g b
c e g b
c e g b
c e g b
>`)
.fm(4)
.fmdecay("<.01 .05 .1 .2>")
.fmsustain(.4)
._scope()
$: note(`
<c2 c3 g3 e4 c1 c2 g2 e3 
c2 c3 g3 c4 c1 c2 g2 e3>*8
`).sound("sawtooth").room(0.1)

$: note(arrange(
  [4, "~"],
  [4, `<g5 ~ e5 ~ c5 ~ g4>*8`]
)).sound("piano").rarely(ply("2 | 4 | 8"))

$: s(arrange(
  [4, "~"],
  [4, `bd bd bd rim`]
)).lpf(800).room(0.2)

$: note(arrange(
  [8, "~"],
  [4, `<c2 c3 g3 e4 c1 c2 g2 e3 c2 c3 g3 c4 c1 c2 g2 e3>*16`.iterBack(4)],
  [8, "~"],
  [4, `<c2 c3 g3 e4 c1 c2 g2 e3 c2 c3 g3 c4 c1 c2 g2 e3>*16`.iterBack(4)]
)).sound("gm_synth_bass_1")

$: n(run(8)).scale("C:pentatonic").s("gm_electric_guitar_muted").release(0.5)
.phaser("<1 2 4 8>")

$: note("<[c3,g3,c4] [g3,b3,d3]>").s("gm_electric_guitar_clean").lpf(slider(0,0,2000,1))._scope()

