import React from "react";
import {useSearchParams} from "react-router-dom";
import Drawer from "./Drawer.jsx";
import AddCart from "../../../features/sales/components/AddCart.jsx";

const componentMap = {
  addCart: AddCart,
}

const UiContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get("type")
  const content = searchParams.get("content")
  const title = searchParams.get("title")
  const Content = content ? componentMap[content] : null

  const close = () => {
    searchParams.delete("type")
    searchParams.delete("content")
    searchParams.delete("id")
    searchParams.delete("title")
    setSearchParams(searchParams)
  }

  if (!Content) return null

  //const Container = type === "drawer" ? Drawer : Modal
  const Container = Drawer

  return (
    <Container isOpen={true} onClose={close} title={title}>
      <Content/>
    </Container>
  )
}
export default UiContainer
