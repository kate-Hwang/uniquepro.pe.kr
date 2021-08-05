
const trigger = new ScrollTrigger.default({
    trigger: {
        once: true, //트리거효과 반복 설정
        offset:{
                viewport:{
                    x: 0,
                    y: (trigger, frame, direction) => {
                        return trigger.visible ? 0: 0.5
                    }
                }
        },
        toggle:{
            class:{
                in:'visible',
                out:'invisible'
            }
        }
    }
});
trigger.add('[data-trigger]');

