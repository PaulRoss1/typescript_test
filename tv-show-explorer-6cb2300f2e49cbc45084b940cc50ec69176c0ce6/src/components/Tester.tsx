import { ShowData } from "../api/interfaces";

export interface TesterProps {
  showData: ShowData | null;
}

export default function Tester({ showData }: TesterProps) {
  return <div>tester: {showData?.Title}</div>;
}
