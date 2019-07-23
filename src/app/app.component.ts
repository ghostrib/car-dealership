import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Dealership';
  inventory = [
    {
      _id: '59d2698c2eaefb1268b69ee5',
      make: 'Chevy',
      year: 2016,
      color: 'Gray',
      price: 16106,
      hasSunroof: false,
      hasFourWheelDrive: true,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: true,
      hasHeatedSeats: false
    },
    {
      _id: '59d2698c05889e0b23959106',
      make: 'Toyota',
      year: 2012,
      color: 'Silver',
      price: 18696,
      hasSunroof: true,
      hasFourWheelDrive: true,
      hasLowMiles: false,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: true
    },
    {
      _id: '59d2698c6f1dc2cbec89c413',
      make: 'Mercedes',
      year: 2016,
      color: 'Black',
      price: 18390,
      hasSunroof: true,
      hasFourWheelDrive: false,
      hasLowMiles: false,
      hasPowerWindows: true,
      hasNavigation: true,
      hasHeatedSeats: false
    },
    {
      _id: '59d2698c340f2728382c0a73',
      make: 'Toyota',
      year: 2015,
      color: 'White',
      price: 15895,
      hasSunroof: true,
      hasFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: true
    },
    {
      _id: '59d2698cba9b82c2347cd13a',
      make: 'Ford',
      year: 2014,
      color: 'Gray',
      price: 19710,
      hasSunroof: false,
      hasFourWheelDrive: true,
      hasLowMiles: false,
      hasPowerWindows: false,
      hasNavigation: true,
      hasHeatedSeats: true
    },
    {
      _id: '59d2698ce2e7eeeb4f109001',
      make: 'Toyota',
      year: 2014,
      color: 'Red',
      price: 19248,
      hasSunroof: true,
      hasFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: true,
      hasHeatedSeats: true
    },
    {
      _id: '59d2698cd6a3b8f0dd994c9d',
      make: 'Toyota',
      year: 2015,
      color: 'Black',
      price: 13170,
      hasSunroof: true,
      hasFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: true,
      hasNavigation: false,
      hasHeatedSeats: false
    },
    {
      _id: '59d2698c86ab54cee8acdc7b',
      make: 'Mercedes',
      year: 2013,
      color: 'Gray',
      price: 15669,
      hasSunroof: false,
      hasFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: false,
      hasHeatedSeats: false
    },
    {
      _id: '59d2698cda9e8d39476c678a',
      make: 'Toyota',
      year: 2015,
      color: 'White',
      price: 16629,
      hasSunroof: false,
      hasFourWheelDrive: false,
      hasLowMiles: true,
      hasPowerWindows: false,
      hasNavigation: false,
      hasHeatedSeats: true
    }
  ];

  hasSunroof = false;
  hasFourWheelDrive = false;
  hasLowMiles = false;
  hasPowerWindows = false;
  hasNavigation = false;
  hasHeatedSeats = false;
  colorSelected = null;

  optionsSelected = [];

  handleClick(e) {
    this[e.target.name] = !this[e.target.name];
    if (this[e.target.name]) {
      this.optionsSelected.push(e.target.id)
    } else {
      const i = this.optionsSelected.indexOf(e.target.id);
      this.optionsSelected.splice(i, 1);
    }
    console.log(this.optionsSelected)
  }

  handleSelectionChange(e) {
    this.colorSelected = e.target.value;
  }

  getResults() {
    const ids = [];
    const results = [];
    this.inventory.forEach(car => {
      if (this.hasSunroof && car.hasSunroof && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.hasFourWheelDrive && car.hasFourWheelDrive && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.hasLowMiles && car.hasLowMiles && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.hasPowerWindows && car.hasPowerWindows && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.hasNavigation && car.hasNavigation && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.hasHeatedSeats && car.hasHeatedSeats && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
      if (this.colorSelected && this.colorSelected === car.color && !ids.includes(car._id)) {
        results.push(car);
        ids.push(car._id);
      }
    });
    return results;
  }

  handleSearch() {
    const result = this.getResults();
    result.forEach(car => {
      console.log(car.make, car.year);
    })
  }
}
