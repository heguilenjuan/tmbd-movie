import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Tag from "@/components/atoms/Tag";
import Text from "@/components/atoms/Text";

export default function Home() {
  return (
      <>
        <Button textButton="ver" btnStyle="secondary"/>
        <Button textButton="opcion"/>
        <Icon type="arrow"/>
        <Icon type="search"/>
        <Icon type="home"/>
        <Icon type="settings"/>
        <Text text="Hola" type="h3"/>
        <Tag text="asd" />
      </>
  );
}
