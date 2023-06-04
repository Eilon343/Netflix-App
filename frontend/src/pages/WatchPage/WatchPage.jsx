import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ReactPlayer from 'react-player';
import { AuthContext } from '../../auth/authContext';
import './WatchPage.scss';
import { getContent } from '../../utils';

const WatchPage = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const [content, setContent] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/');
    }
  }, [user, navigate]);
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setContent(await getContent(id, user.token));
      } catch (err) {
        console.log(err);
      }
    };
    fetchContent();
    // eslint-disable-next-line
  }, [id, navigate]);

  return (
    <div className="watch">
      <Link className="back" to="/">
        <ArrowBackIosNewOutlinedIcon />
        home
      </Link>
      <ReactPlayer
        controls={true}
        className="video"
        height="100%"
        width="100%"
        url={content ? content.movie : ''}
        playing={true}
      ></ReactPlayer>
    </div>
  );
};

export default WatchPage;
