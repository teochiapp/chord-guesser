const chords = [
  // Acordes Mayores
  { name: "C", sound: "https://www.auralwiz.com/mp3/c-major-chord.mp3", image: "chords/c.png", type: "mayor", song: "https://www.youtube.com/embed/QDYfEBY9NM4?si=JewwXYZ4iriil0u7"},
  { name: "C#", sound: "https://www.auralwiz.com/mp3/c-sharp-major-chord.mp3", image: "chords/d_flat.png", type: "mayor", song:"https://www.youtube.com/embed/PFW2uSCZ0uE?si=c5qV39-Thvs9u0OC" },
  { name: "Cm", sound: "https://www.auralwiz.com/mp3/c-minor-chord.mp3", image: "chords/cm.png", type: "menor", song:"https://www.youtube.com/embed/gHTiCgSzkks?si=lCTYueSVOqcvcxQx"},
  { name: "C#m", sound: "https://www.auralwiz.com/mp3/c-sharp-minor-chord.mp3", image: "chords/d_flat_m.png", type: "menor", song:"https://www.youtube.com/embed/weRHyjj34ZE?si=TaGdB7erhdVVjNFO" },

  { name: "D", sound: "https://www.auralwiz.com/mp3/d-major-chord.mp3", image: "chords/d.png", type: "mayor", song:"https://www.youtube.com/embed/450p7goxZqg?si=rNljlrZgTZzSJWR0"},
  { name: "D#", sound: "https://www.auralwiz.com/mp3/d-sharp-major-chord.mp3", image: "chords/e_flat.png", type: "mayor", song:"https://www.youtube.com/embed/wZ8eZRxFA-0?si=zklf-7ZBhmfLIe1c" },
  { name: "Dm", sound: "https://www.auralwiz.com/mp3/d-minor-chord.mp3", image: "chords/dm.png", type: "menor", song:"https://www.youtube.com/embed/izGwDsrQ1eQ?si=ce1UfRexzJ_yhXJF"},
  { name: "D#m", sound: "https://www.auralwiz.com/mp3/d-sharp-minor-chord.mp3", image: "chords/e_flat_m.png", type: "menor", song:"https://www.youtube.com/embed/I7yqFVEvdY0?si=0VooAd-fPemS7A8u" },

  { name: "E", sound: "https://www.auralwiz.com/mp3/e-major-chord.mp3", image: "chords/e.png", type: "mayor", song:"https://www.youtube.com/embed/v2AC41dglnM?si=ghX8jxz5wXrZXwCL" },
  { name: "Em", sound: "https://www.auralwiz.com/mp3/e-minor-chord.mp3", image: "chords/em.png", type: "menor", song:"https://www.youtube.com/embed/vyzO-5vt48g?si=jn0UW3kORzDb1d9T" },

  { name: "F", sound: "https://www.auralwiz.com/mp3/f-major-chord.mp3", image: "chords/f.png", type: "mayor", song:"https://www.youtube.com/embed/RB-RcX5DS5A?si=zYTcDbLCemGJtacE" },
  { name: "F#", sound: "https://www.auralwiz.com/mp3/f-sharp-major-chord.mp3", image: "chords/g_flat.png", type: "mayor", song:"https://www.youtube.com/embed/k04tX2fvh0o?si=aDyyCZ9oNxzBpBkd"},
  { name: "Fm", sound: "https://www.auralwiz.com/mp3/f-minor-chord.mp3", image: "chords/fm.png", type: "menor", song:"https://www.youtube.com/embed/89dGC8de0CA?si=CHfIZzQLZGYXmz_c" },
  { name: "F#m", sound: "https://www.auralwiz.com/mp3/f-sharp-minor-chord.mp3", image: "chords/g_flat_m.png", type: "menor", song:"https://www.youtube.com/embed/FTQbiNvZqaY?si=xoSOPgcWEP9u6l8C" },

  { name: "G", sound: "https://www.auralwiz.com/mp3/g-major-chord.mp3", image: "chords/g.png", type: "mayor", song: "https://www.youtube.com/embed/XFkzRNyygfk?si=HyFEzNwfyk3UiMy8" },
  { name: "G#", sound: "https://www.auralwiz.com/mp3/g-sharp-major-chord.mp3", image: "chords/a_flat.png", type: "mayor", song:"https://www.youtube.com/embed/OMOGaugKpzs?si=HoZHzmJmX9OTWh4Y" },
  { name: "Gm", sound: "https://www.auralwiz.com/mp3/g-minor-chord.mp3", image: "chords/gm.png", type: "menor", song:"https://www.youtube.com/embed/YGfllz_P2_k?si=IFTlVy0FLn7wF0ah" },
  { name: "G#m", sound: "https://www.auralwiz.com/mp3/g-sharp-minor-chord.mp3", image: "chords/a_flat_m.png", type: "menor", song:"https://www.youtube.com/embed/qGtJEMlGiho?si=ERkk3CXeNmSdZmFQ" },

  { name: "A", sound: "https://www.auralwiz.com/mp3/a-major-chord.mp3", image: "chords/a.png", type: "mayor", song:"https://www.youtube.com/embed/6NXnxTNIWkc?si=iz4up_JxOp9Xf1Vs" },
  { name: "A#", sound: "https://www.auralwiz.com/mp3/a-sharp-major-chord.mp3", image: "chords/b_flat.png", type: "mayor", song:"https://www.youtube.com/embed/wccRif2DaGs?si=tv3q-lOQbcVZfUwm" },
  { name: "Am", sound: "https://www.auralwiz.com/mp3/a-minor-chord.mp3", image: "chords/am.png", type: "menor", song:"https://www.youtube.com/embed/japBNRP47-8?si=cJC-OjV6jejgCqmj" },
  { name: "A#m", sound: "https://www.auralwiz.com/mp3/a-sharp-minor-chord.mp3", image: "chords/b_flat_m.png", type: "menor", song:"https://www.youtube.com/embed/dQw4w9WgXcQ?si=V-alnOzzrb_6igEa" },

  { name: "B", sound: "https://www.auralwiz.com/mp3/b-major-chord.mp3", image: "chords/b.png", type: "mayor", song:"https://www.youtube.com/embed/8SbUC-UaAxE?si=DkKvezNW5-M4XsHU&amp;start=88" },
  { name: "Bm", sound: "https://www.auralwiz.com/mp3/b-minor-chord.mp3", image: "chords/bm.png", type: "menor", song:"https://www.youtube.com/embed/09839DpTctU?si=hKvJInkcj_g10Djw" },
];
export default chords;
