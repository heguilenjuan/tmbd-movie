import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

export default function Home() {
  return (
      <>
        <Button textButton="ver" btnStyle="secondary"/>
        <Button textButton="opcion"/>
        <Icon type="arrow"/>
        <Icon type="search"/>
        <Icon type="home"/>
        <Icon type="settings"/>
      </>
  );
}
