import { Popover, Input, InputSearch, Row, Col } from "@arco-design/web-vue";
import { PropType } from "vue";


const IconPicker = defineComponent({
  name: "IconPicker",
  props: {
    // 1. 传递 json icon的name 为字符串
    list: {
      type: Array as PropType<any>,
      default: () => {
        return [
          {
            cnName: "选择",
            enName: "ab-testing",
            icon: "ab-testing",
          },
        ];
       }
    }
  },
  setup(props) {
    return () => {
      return (
        <div>
          asdasd
          <Popover
            position="bottom"
            v-slots={{
              title: () => { 
                return <InputSearch  placeholder="搜搜" />
              },
              content: () => {
                return (
                  <Row gutter={[8, 8]}>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                    <Col span={4}>
                      <iconify-icon icon={props.list[0].icon} />
                    </Col>
                  </Row>
                );
              },
            }}
          >
            <Input placeholder="搜索图标"></Input>
          </Popover>
        </div>
      );
    };
  },
});

export default IconPicker;
