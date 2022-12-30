import styles from './Media.module.css';

export const Media = ({data}) => {
  const mediaType = data?.post_hint;

  if (mediaType === 'image') {

    return <img src={data.url} alt={data.title} className={styles['media']}/>;
    
  } else if (mediaType === 'hosted:video') {
      return (
        <iframe
					src={data.media.reddit_video.fallback_url}
					title={data.title}
					allowFullScreen
					allow='autoplay'
          className={styles['video']}
				/>
      );
  } else if (mediaType === 'rich:video') {

    return (
      <video controls loop>
        <source src={data.url} type='video/mp4' />
      Your browser does not support video tags.
      </video>
    );

  } else if (mediaType === 'rich:iframe') {

    return (
      <iframe
					src={data.url}
					title={data.title}
					allowFullScreen
					allow='autoplay'
				/>
    );

  } else if (data?.gallery_data) {

    return (
      <a href={data.url} target='_blank' rel='noreferrer'>
				<img src={data.thumbnail} alt='gif' height='400px'/>
			</a>
    );

  } else {

    return <div/>;

  };
};