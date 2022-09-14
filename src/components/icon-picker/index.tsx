import { Popover, Input, InputSearch, Row, Col, Card } from "@arco-design/web-vue";
import { PropType } from "vue";

interface IconType {
  cnName: string;
  enName: string;
  icon: string;
}

const IconPicker = defineComponent({
  name: "IconPicker",
  props: {
    // 1. 传递 json icon的name 为字符串
    list: {
      type: Array as PropType<IconType[]>,
      default: () => {
        return [
          // {
          //   cnName: "选择",
          //   enName: "ab-testing",
          //   icon: "ab-testing",
          // },
        ];
      }
    },
    /**
     * zh 
     */
    modelValue: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: [
    'update:modelValue'
  ],
  setup(props, { slots, emit }) {
    const iconStr = ref(props.modelValue);

    const iconList = ref<IconType[]>(props.list || []);

    const handleClick = (iconData: IconType) => {

      iconStr.value = iconData.icon
      emit('update:modelValue', iconData.icon)
    }


    const handleSearch = (val: string) => {
      if (val) {
        return iconList.value = props.list.filter((iconData) => {
          return iconData.enName.indexOf(val) >= 0 || iconData.cnName.indexOf(val) >= 0
        })
      }
      return iconList.value = props.list
    }
    return () => {
      return (
        <div>
          <Popover
            popupVisible={true}
            position="bottom"
            contentStyle={{ width: "450px", height: "258px" }}
            v-slots={{
              title: () => {
                return <InputSearch placeholder="搜索icon" onInput={handleSearch} />
              },
              content: () => {
                return (
                  <Row gutter={[8, 8]}>
                    {
                      iconList.value.map((iconData) => {
                        console.log('<><><>', iconData)
                        return <Col span={4} key={iconData.icon}>
                          <Card
                            onClick={() => { handleClick(iconData) }}
                            style={{ height: "36px", display: "flex", "justify-content": "center", "align-items": "center", cursor: "pointer" }}>
                            <iconify-icon icon={iconData.icon} style={{
                              display: 'inline-block',
                              width: '1em',
                              height: '1em',
                              color: 'inherit',
                              fontStyle: 'normal',
                              verticalAlign: '-2px',
                              outline: 'none',
                              stroke: 'none'
                            }} />
                          </Card>
                        </Col>
                      })
                    }
                  </Row>
                );
              },
              default: () => {
                if (slots.default) {
                  return slots.default()
                }
                return <Input placeholder="搜索图标" modelValue={iconStr.value}></Input>
              }
            }}
          >
          </Popover>
        </div>
      );
    };
  },
});

export default IconPicker;
