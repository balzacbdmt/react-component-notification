import * as React from 'react'
import './styles.scss'

interface Props {
  title?: string,
  content?: string,
  icon?: React.ReactNode,
  onClose?: Function,
  closeTimeOut?: number,
  className?: string,
  position?: string,
}

const Notification = ({ title, content, icon, onClose, closeTimeOut, className, position }: Props) => {
  const [lastTitle, setLastTitle] = React.useState<string | null>(title || null);
  const [lastContent, setLastContent] = React.useState<string | null>(content || null);
  const [hidden, setHidden] = React.useState<boolean>(false);

  function handleClose() {
    if (onClose) onClose();
    setHidden(true);
  }

  React.useEffect(() => {
    if (title || content || title !== undefined || content !== undefined) {
      if (title !== lastTitle || content !== lastContent) setHidden(false);
      if (title !== undefined) setLastTitle(title);
      if (content !== undefined) setLastContent(content);
    }
  }, [title, content]);

  React.useEffect(() => {
    if (title || content) {
      setTimeout(() => {
        handleClose();
      }, closeTimeOut || 3000);
    }
  }, [title, content]);

  const classes = () => {
    let cn = 'notification';
    if ((title || content) && !hidden) cn += ' active';
    if (className) cn += ` ${className}`;
    if (position) cn += ` ${position}`;
    return cn;
  }

  return (
    <button className={classes()}>
      {icon}
      <div>
        <h1>{lastTitle}</h1>
        <p>{lastContent}</p>
      </div>
      <button onClick={() => handleClose()} className="close"></button>
    </button>
  );
}

export default Notification;
