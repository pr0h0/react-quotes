import React, { Component } from "react";

import Quote from "./Quote";

export default class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quotesArr: []
    };
  }
  async componentDidMount() {
    let req = await fetch("http://quotes.rest/qod.json");
    let res = req.ok ? await req.json() : { contents: { quotes: [] } };
    let quotes = [...res.contents.quotes, ..._quotes];

    req = await fetch("https://codepen.io/loomernescent/pen/LRGRaB.js");
    res = req.ok ? await req.json() : [];

    res = res.map(q => ({
      quote: q.quote,
      author: q.whom,
      background: q.imgSrc,
      date: new Date().toDateString(),
      tags: ["autumn", "inspire", "peace", "autumn"],
      category: "life"
    }));
    quotes = [...res, ...quotes];

    req = await fetch("http://quotes.stormconsultancy.co.uk/quotes.json");
    res = req.ok ? await req.json() : [];

    res = res.map(q => ({
      quote: q.quote,
      author: q.author,
      background: "",
      date: new Date().toDateString(),
      tags: ["autumn", "inspire", "peace", "autumn"],
      category: "life"
    }));
    quotes = [...res, ...quotes];

    quotes = shuffle(quotes);
    const quotesArr = quotes.map((quote, index) => (
      <Quote key={index} {...quote} />
    ));

    this.setState({ quotes, quotesArr });
  }

  render() {
    const { quotesArr } = this.state;
    return <div id="quotes">{quotesArr}</div>;
  }
}

const _quotes = [
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "inspire",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "management",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "sports",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "life",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "funny",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "love",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "art",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  },
  {
    quote:
      "Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees. The winds will blow their own freshness into you, and the storms their energy, while cares will drop away from you like the leaves of Autumn.",
    author: "John Muir",
    category: "students",
    date: "2019-12-05",
    tags: ["autumn", "inspire", "peace", "autumn"],
    background: "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg"
  }
];

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let rnd = Math.floor(Math.random() * arr.length);
    arr[i] = arr[rnd];
    arr[rnd] = temp;
  }
  return arr;
}
