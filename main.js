
var root = new Vue({
   el: "#carousel",
   data: {
      images: [
         "https://siviaggia.it/wp-content/uploads/sites/2/2017/03/paesaggio-alpi-think-1217.jpg",
         "https://s3.amazonaws.com/cdn-media.teknoring/wp-content/uploads/2016/08/paesaggio_02.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YGZlwE1wieo8uBHxr1OrYaF2EV9nUn27NQ&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS800GFa9IXWtbTmUTEJbHQBm5_bi3RI8zagA&usqp=CAU"
      ],
      imageIndex: 0
   },
   methods: {
      prev: function() {
         this.imageIndex -= 1;
         if (this.imageIndex == -1) {
            this.imageIndex = this.images.length - 1;
         }
      },
      next: function() {
         this.imageIndex += 1;
         if (this.imageIndex == this.images.length) {
            this.imageIndex = 0;
         }
      }
   }
})
