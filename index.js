class TeaList {
    constructor() {
      this.teaItems = [];
    }
  
    addTeaItem(teaName) {
      this.teaItems.push(teaName);
      console.log(`Added ${teaName} to the tea list.`);
    }
  
    removeTeaItem(teaName) {
      const index = this.teaItems.indexOf(teaName);
      if (index !== -1) {
        this.teaItems.splice(index, 1);
        console.log(`Removed ${teaName} from the tea list.`);
      } else {
        console.log(`${teaName} is not found in the tea list.`);
      }
    }
  
    displayTeaList() {
      console.log('Tea List:');
      this.teaItems.forEach((tea, index) => console.log(`${index + 1}. ${tea}`));
    }
  }
  
  // Example usage:
  const myTeaList = new TeaList();
  myTeaList.addTeaItem('Green Tea');
  myTeaList.addTeaItem('Chai');
  myTeaList.displayTeaList();
  myTeaList.removeTeaItem('Chai');
  myTeaList.displayTeaList();
  