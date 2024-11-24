class Smoothie {
    constructor(name, base, fruits, sweetener, addons, size, notes) {
      this.name = name;
      this.base = base;
      this.fruits = fruits;
      this.sweetener = sweetener;
      this.addons = addons;
      this.size = size;
      this.notes = notes;
    }
  
    getDescription() {
      return `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Base:</strong> ${this.base}</p>
        <p><strong>Fruits:</strong> ${this.fruits.join(', ') || 'None'}</p>
        <p><strong>Sweetener:</strong> ${this.sweetener}</p>
        <p><strong>Add-ons:</strong> ${this.addons.join(', ') || 'None'}</p>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Notes:</strong> ${this.notes || 'None'}</p>
      `;
    }
  }
  
  document.getElementById('order-button').addEventListener('click', () => {
    const name = document.getElementById('customer-name').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(el => el.value);
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;
    const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(el => el.value);
    const size = document.getElementById('size').value;
    const notes = document.getElementById('notes').value;
  
    const smoothie = new Smoothie(name, base, fruits, sweetener, addons, size, notes);
    document.getElementById('order-summary').innerHTML = smoothie.getDescription();
  });
  