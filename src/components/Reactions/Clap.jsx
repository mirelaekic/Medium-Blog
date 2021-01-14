import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
export default function Clap() {
  const [view, setView] = React.useState('quilt');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  return (
    <ToggleButton value="quilt" aria-label="quilt">
    <ViewQuiltIcon />
  </ToggleButton>
  );
}