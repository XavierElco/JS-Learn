class Scheduler {
    constructor(max) {
        this.max = max;
        this.count = 0;
        this.queue = new Array()
    }

    async add(promiseCreator) { 
        // 如果count大于最高并发，那么此任务将暂时被挂起
        if (this.count >= this.max) {
            // 将resolve存入队列，后续可以直接唤醒
            await new Promise((resolve, reject) => this.queue.push(resolve))
            
        }

        // 能走到这一步肯定是有任务被加入了
        this.count++;
        // 等待加入的任务被执行
        let result = await promiseCreator();
        // 执行完毕就要释放一个并发位
        this.count--;
        // 还有其他任务的话，此时我们要让出一个位置给其他任务了
        if (this.queue.length) {
            this.queue.shift()()
        }
        return result;
    }

  }



  const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
  })
  
  // 创造一个调度器实例
  const scheduler = new Scheduler(2)

  // addTask会把任务加入到调度器，计时器结束后会返回任务结果
  const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
  }
  
  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')
  
  // 打印顺序是：2 3 1 4