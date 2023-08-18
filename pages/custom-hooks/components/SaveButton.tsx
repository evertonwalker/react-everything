import useOnlineStatus from '../hooks/useOnlineStatus';

export default function SaveButton() {

  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  const classNameBg = isOnline ? 'bg-green-700' : 'bg-red-500';

  return (
    <button className={`p-2 rounded mt-2 ${classNameBg}`} disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}