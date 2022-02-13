const counters = document.querySelectorAll(".counter")
const speed = 200 // the lower it is, the faster it should count

counters.forEach(counter => {
  const updateCount = () => {
    // const target = counter.getAttribute('data-target')
    // console.log(typeof target) //a string (add the + sign to make it a number)
    const target = +counter.getAttribute("data-target")
    const count = +counter.innerText

    const increment = target / speed
    // console.log(count);

    if (count < target) {
      counter.innerText = count + increment
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target
    }
  }

  updateCount()
})
