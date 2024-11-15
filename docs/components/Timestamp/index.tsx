import {useState} from "react";
import {usePageData} from 'rspress/runtime';
import {App, Button, Modal} from "antd";

function TimestampComponent() {
  const pageData = usePageData();
  const [show,setShow] = useState(false);
  return (
    // @ts-ignore
    <App>
      <div>
        <Button onClick={() => setShow(true)}>Click ME</Button>
        <h2>here, I will return a timestamp:</h2>
        {JSON.stringify(pageData.page)}
        {pageData.page.lastUpdatedTime}
      </div>
      <Modal title="Basic Modal" open={show} onOk={()=>setShow(false)} onCancel={()=>setShow(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </App>
  );
}

export default TimestampComponent;
