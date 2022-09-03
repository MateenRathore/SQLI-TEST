import {useEffect, useState} from "react";
import axios from "axios";
import workPress from  '../data/wordpress.json';
import {formateDate, removeDuplicates, truncate} from "../helper";
type Props = {
  show: boolean;
  setShowNewsFeed: (show: boolean) => void;
};

type FeedType = {
  id:number;
  title: string;
  link :string;
  date: string;
};
const NewsFeed = ({ show, setShowNewsFeed }: Props) => {

  const [feedsData , setFeedsData] = useState<FeedType[]>();

  const getFeeds = () =>{
    const wordItems = workPress.map((data) =>{
      return {
        id:data.id,
        title:truncate(data.title.rendered),
        link:data.link,
        date:formateDate(data.parsely.meta.dateCreated)
      }
    })
    const uniqueItems = removeDuplicates(wordItems  ,"id");
    setFeedsData(uniqueItems);
  }

  useEffect(() =>{
    getFeeds();
  },[])


  if (!show) {
    return (
      <div style={{ marginTop: 24 }}>
        <h2>News feed</h2>
        <button onClick={() => setShowNewsFeed(true)}>Show news feed</button>
      </div>
    );
  }

  return (
    <>
      <h2>News feed</h2>

      <table style={{ marginTop: 24 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {feedsData?.map((item, idx) => (
            <tr key={`feed-${idx}`}>
              <td>
                <a style={{ textDecoration: "none" }} href={item.link}>
                  {item.title}
                </a>
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default NewsFeed;
