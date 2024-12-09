import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

export default function NoChatComponent() {
  return (
    <div className="flex justify-center items-center h-dvh">
        <div className="text-center">
            <CommentsDisabledIcon sx={{fontSize: 80}}/>
            <h1 className="text-2xl">No Chat Selected</h1>
        </div>
    </div>
  );
}
