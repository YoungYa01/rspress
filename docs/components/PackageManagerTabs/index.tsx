// @ts-ignore
import {PackageManagerTabs} from '@theme';

type Props = {
  command: string;
}

export default function CmdTab(props: Props): JSX.Element {
  const {command} = props;
  return <PackageManagerTabs command={command}/>;
}
