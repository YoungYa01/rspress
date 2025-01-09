import {Button, Spin, Empty, Space, Typography, Flex, Tour, TourStepProps, Tag, Popover} from "antd";
import {useEffect, useRef, useState} from "react";
import {InboxOutlined, FileOutlined} from '@ant-design/icons';
import {XMindEmbedViewer} from 'xmind-embed-viewer'; // 引入xmind-embed-viewer

const {Title, Text} = Typography;

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [open, setOpen] = useState<boolean>(false);
  const viewerRef = useRef<XMindEmbedViewer>();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);
  const getXMindFile = async (ext: string) => {
    const fileSelector = document.createElement('input')
    fileSelector.style.display = 'none'
    document.body.appendChild(fileSelector)
    await new Promise<void>(resolve => {
      fileSelector.setAttribute('type', 'file')
      fileSelector.setAttribute('accept', ext)
      fileSelector.addEventListener('change', () => {
        resolve();
      })
      fileSelector.click()
    }).finally(() => {
      document.body.removeChild(fileSelector)
    })
    if (!fileSelector.files || !fileSelector.files.length) {
      return
    }
    return fileSelector.files[0]
  }

  const handleClick = () => {
    getXMindFile('.xmind')
      .then(async (file) => {
        if (!viewerRef.current || !file) return;
        setLoading(true);
        setFile(file);
        viewerRef.current.load(await file.arrayBuffer())
        viewerRef.current?.addEventListener('map-ready', () => setLoading(false))
      })
  }


  useEffect(() => {
    viewerRef.current = new XMindEmbedViewer({
      el: "#XMind-container",
      region: 'cn',
      styles: {
        height: '85vh',
        width: '95vw'
      }
    });
  }, []);

  const steps: TourStepProps[] | undefined = [
    {
      title: '上传XMind文件',
      description: '点击此处上传XMind文件',
      cover: (
        <img
          alt="tour.png"
          src="https://assets.xmind.cn/www/assets/images/new-xmind-logo-white-5afbacbc7d.svg"
        />
      ),
      target: () => ref1.current!,
    },
    {
      title: '预览XMind文件',
      description: '在此处预览XMind文件',
      cover: (
        <img
          alt="tour.png"
          src="https://assets.xmind.cn/www/assets/images/new-xmind-logo-white-5afbacbc7d.svg"
        />
      ),
      target: () => ref2.current!,
    },
    {
      title: '导出XMind文件',
      description: <Flex gap={10}>
        <Flex vertical gap={10}>
          <Tag>鼠标滚轮</Tag>
          <Tag>CTRL + 鼠标滚轮</Tag>
          <Tag>SHIFT + 鼠标滚轮</Tag>
        </Flex>
        <Flex vertical gap={10}>
          <div> 上下移动</div>
          <div> 放大/缩小</div>
          <div> 左右移动</div>
        </Flex>
      </Flex>,
      target: () => ref2.current!,
    },
  ]

  return (
    <Spin spinning={loading}>
      <div style={{
        position: 'absolute',
        top: -28,
        left: 0,
        backgroundColor: '#fff',
        width: 300,
        height: 28,
      }}></div>
      {
        file ? <Popover content={(
            <Flex gap={10}>
              <Flex vertical gap={10}>
                <Tag>鼠标滚轮</Tag>
                <Tag>CTRL + 鼠标滚轮</Tag>
                <Tag>SHIFT + 鼠标滚轮</Tag>
              </Flex>
              <Flex vertical gap={10}>
                <div> 上下移动</div>
                <div> 放大/缩小</div>
                <div> 左右移动</div>
              </Flex>
            </Flex>
          )} title="使用介绍" placement={'leftBottom'}>
            <Button
              onClick={() => setOpen(true)}
              style={{position: 'absolute', top: -28, right: 0}}
              type={'text'} disabled={!!file}>使用介绍</Button>
          </Popover> :
          <Button
            onClick={() => setOpen(true)}
            style={{position: 'absolute', top: -28, right: 0}}
            type={'text'} disabled={!!file}>使用介绍</Button>
      }
      <Tour
        open={open} steps={steps}
        onClose={() => setOpen(false)}
        onChange={(current) => {
          const file = new File([new Blob(["XMind 演示内容"])], "XMind 演示内容.xmind");
          setFile(file);
        }}
        onFinish={() => {
          setFile(undefined)
        }}
      />
      {
        !file && (
          <Flex
            justify={'center'} align={'center'} onClick={handleClick}
            style={{position: 'fixed', left: '50%', transform: 'translateX(-50%)'}}
            ref={ref1}
          >
            <Flex vertical style={{border: '1px dashed #1890ff', padding: 40, borderRadius: 10, cursor: 'pointer'}}>
              <Flex justify={"center"}>
                <InboxOutlined style={{fontSize: '64px', color: '#1890ff'}}/>
              </Flex>
              <Space direction="vertical" align="center" size="large">
                <Title level={3}>上传 XMind 文件</Title>
                <Text type="secondary">
                  您可以上传 XMind 文件进行在线预览。
                </Text>
                <p className="ant-upload-hint" style={{color: '#ff7669'}}>
                  本平台不会保存您的文件，加载全部在线完成，请放心使用。
                </p>
              </Space>
            </Flex>
          </Flex>
        )
      }
      <div id={"XMind-container"} ref={ref2}></div>

    </Spin>
  )
}
