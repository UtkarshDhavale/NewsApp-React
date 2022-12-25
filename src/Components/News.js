import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {

  article = [
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Paris shooting: Protests after deadly attack on Kurds",
    "description": "Protesters clash with police following Friday's shootings, which killed three people.",
    "url": "http://www.bbc.co.uk/news/world-europe-64086680",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14372/production/_128120828_b0be2af8a77c64ddb2996400eec7ccd2d127c346.jpg",
    "publishedAt": "2022-12-25T12:52:25.8247617Z",
    "content": "Media caption, Firefighters extinguish burning cars following a day of unrest in Paris\r\nParis has witnessed a second day of violent unrest after Friday's deadly attack on the city's Kurdish community… [+2495 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Foreign aid groups halt work after Taliban ban on female staff",
    "description": "Three NGOs are suspending operations in Afghanistan after women were banned from working for them.",
    "url": "http://www.bbc.co.uk/news/world-asia-64090549",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8F7C/production/_128123763_epawomen.jpg",
    "publishedAt": "2022-12-25T12:37:23.6226388Z",
    "content": "Three major non-governmental organisations (NGOs) have halted work in Afghanistan after women were banned from working for them by the Taliban.\r\nIn a joint statement, Care International, the Norwegia… [+924 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Pope Francis calls for end to 'senseless' war in Ukraine",
    "description": "In his Christmas Day message, the pontiff said the world was experiencing a \"famine of peace\".",
    "url": "http://www.bbc.co.uk/news/world-europe-64089428",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14EDA/production/_128122758_popertr73766e0532b90a8fa176ce2e8fd70ac95315a46a.jpg",
    "publishedAt": "2022-12-25T12:07:19.6381707Z",
    "content": "Pope Francis has called for an \"immediate end\" to what he described as the \"senseless war in Ukraine\", in his annual Christmas Day message.\r\nSpeaking in front of a large crowd in St Peter's Square at… [+2979 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "King Charles to celebrate Christmas at Sandringham with family",
    "description": "Members of the Royal Family will attend a morning service at St Mary Magdalene Church.",
    "url": "http://www.bbc.co.uk/news/uk-64089661",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0D09/production/_127773330_gettyimages-630511898.jpg",
    "publishedAt": "2022-12-25T09:37:20.4658942Z",
    "content": "King Charles will attend the Christmas Day church service at Sandringham later for the first time as monarch.\r\nThe King and Camilla, the Queen Consort will be joined by the Prince and Princess of Wal… [+1629 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Canada coach crash leaves more than 50 injured",
    "description": "It is not yet known what caused the crash involving an intercity coach on Christmas Eve.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64089455",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/14AF2/production/_128122748_gettyimages-1240653255-594x594.jpg",
    "publishedAt": "2022-12-25T08:22:21.6839647Z",
    "content": "More than 50 people have been injured in an intercity coach crash in the province of British Columbia, Canada. \r\nIt happened near the town of Merritt, where temperatures dropped to -3.9C on Saturday.… [+1027 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Wallasey: Police hunting gunman as woman dies after pub shooting",
    "description": "Merseyside Police have released details of a suspected gunman they say fled the scene.",
    "url": "http://www.bbc.co.uk/news/uk-england-merseyside-64088175",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0E83/production/_115651730_breaking-promo-976.png",
    "publishedAt": "2022-12-25T05:22:20.8098809Z",
    "content": "A murder investigation has been launched after a woman was fatally shot near Liverpool on Christmas Eve.\r\nMerseyside Police said officers were called to the Lighthouse Inn in Wallasey Village at abou… [+1170 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US winter storm: Americans and Canadians face mass outages on Christmas Day",
    "description": "At least 19 deaths are linked to a massive winter storm that continues to pummel the US and Canada.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-64088985",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E3D2/production/_128122385_08f85072-0721-43ec-8aaf-3fa34e1f52f8.jpg",
    "publishedAt": "2022-12-25T04:37:19.3411871Z",
    "content": "Media caption, WATCH: Wind, snow, bitter cold combine for historic storm\r\nMore than one million Americans and Canadians are facing Christmas Day without power as a massive winter storm continues to p… [+2663 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "James Webb telescope: Amazing images show the Universe as never before",
    "description": "It's a year since the James Webb telescope launched, and we've marvelled at its pictures ever since.",
    "url": "http://www.bbc.co.uk/news/science-environment-64051171",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1F72/production/_128105080_newindex.jpg",
    "publishedAt": "2022-12-25T00:37:23.7475322Z",
    "content": "It was the $10bn gift to the world. A machine that would show us our place in the Universe.\r\nThe James Webb Space Telescope was launched exactly a year ago, on Christmas Day. It had taken three decad… [+4150 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Maxi Jazz: Tributes hail Faithless singer as an 'incredible talent'",
    "description": "Dutch trance legend Armin van Buuren hopes the London singer's music keeps on \"inspiring others\".",
    "url": "http://www.bbc.co.uk/news/entertainment-arts-64088168",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/141EC/production/_128121428_gettyimages-593357358.jpg",
    "publishedAt": "2022-12-25T00:37:21.4030044Z",
    "content": "The music world has been paying tribute to the lead singer of British dance act Faithless with one iconic band hailing him as \"an incredible talent\".\r\nMaxi Jazz, whose real name was Maxwell Fraser, d… [+2398 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Ukraine war: Zelensky delivers defiant Christmas message after Russian strikes",
    "description": "President Zelensky urges his people to persevere as Russian attacks leave millions without power.",
    "url": "http://www.bbc.co.uk/news/world-europe-64088046",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6150/production/_128121942_mediaitem128121941.jpg",
    "publishedAt": "2022-12-24T23:37:20.9811591Z",
    "content": "Ukrainian President Volodymyr Zelensky has urged his people to persevere in the face of Russian attacks as the country celebrates Christmas.\r\nIn a defiant speech on Saturday, he said: \"Freedom comes … [+2402 chars]"
    }
    ];

  constructor(){
    super();
    console.log("This is a News constructor");
    this.state={
      article: this.article,
      loading:false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Daily News</h2>
        <div className = "row">
          {this.state.article.map((element)=>{
            return <div className="col-md-4" key={element.url} >
                      <NewsItem title={element.title} Description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}
        </div>
      </div>
    )
  }
}

export default NewsComponent
