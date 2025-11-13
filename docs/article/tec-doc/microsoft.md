# Windows/Microsoft 激活脚本 （MAS）


> 开源 Windows 和 Office 激活器，具有 HWID、Ohook、TSforge 和在线 KMS 激活方法，以及高级故障排除功能。


## 如何激活 Windows / Office / 扩展更新 （ESU）？


方法 1 - PowerShell ❤️


## 打开 PowerShell

单击“开始”菜单，键入 ，然后将其打开。PowerShell


## 复制并粘贴下面的代码，然后按 Enter。


对于 Windows 8、10、11： 📌

```shell
irm https://get.activated.win | iex
```


如果上述内容被 ISP/DNS 阻止，请尝试以下作（需要更新 Windows 10 或 11）：

```shell

iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)

```

对于 Windows 7 及更高版本：

```shell

iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))

```


脚本未启动❓[使用方法 2。](https://massgrave.dev/#method-2---traditional-windows-vista-and-later)


## 将出现激活菜单。选择绿色突出显示的选项以激活 Windows 或 Office。

![MAS.png](/MAS.png)
