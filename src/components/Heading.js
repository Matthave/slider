import React from 'react';
import Box from './Box';

const boxes = [
  { id: 1, heading: 'Heading', text: 'Lorem ipsum dolor sit amet.' },
  { id: 2, heading: 'Heading', text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus.' },
  { id: 3, heading: 'Ultra Mega Super Long Heading', text: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet' }
]

let sliderFlag = 0;
let leftFlag = 0;
let rightFlag = 0;

class Heading extends React.Component {

  handleClickBox = (id) => {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');

    const offsetWidthBox = box1.offsetWidth + 25;

    if (id === 'right') {
      if (leftFlag === true) {
        box1.style.left = 0;
        box2.style.left = 0;
        box3.style.left = 0;
        sliderFlag = 0;
        leftFlag = false;
        rightFlag = true;
        return;
      } else {
        if (sliderFlag === 0) {
          box1.style.left = `${offsetWidthBox}px`;
          box2.style.left = `${offsetWidthBox}px`;
          box3.style.left = `${offsetWidthBox}px`;
          setTimeout(() => {
            box3.style.left = `-${(offsetWidthBox * 2) + 12.5}px`
          }, 50);
          sliderFlag++;
          rightFlag = true;
        }

        else if (sliderFlag === 1) {
          box1.style.left = '66%';
          box2.style.left = `${offsetWidthBox * 2}px`;
          setTimeout(() => {
            box2.style.left = `-${(offsetWidthBox) - 12.5}px`
          }, 50);
          box3.style.left = `-${offsetWidthBox}px`;
          sliderFlag++;
        }

        else if (sliderFlag === 2) {
          box1.style.left = 0;
          box2.style.left = 0;
          box3.style.left = 0;
          sliderFlag = 0;
          rightFlag = false
        }
      }

    }



    if (id === 'left') {
      if (rightFlag === true) {
        box1.style.left = 0;
        box2.style.left = 0;
        box3.style.left = 0;
        sliderFlag = 0;
        leftFlag = true;
        rightFlag = false;
        return;
      } else {
        if (sliderFlag === 0) {
          box1.style.left = `-${offsetWidthBox}px`;
          box2.style.left = `-${offsetWidthBox}px`;
          box3.style.left = `-${offsetWidthBox}px`;
          setTimeout(() => {
            box1.style.left = `${(offsetWidthBox * 2) + 12.5}px`
          }, 50);
          sliderFlag++;
          leftFlag = true;
        }

        else if (sliderFlag === 1) {
          box1.style.left = '33%';
          box2.style.left = `-${offsetWidthBox * 2}px`;
          setTimeout(() => {
            box2.style.left = `${(offsetWidthBox) - 12.5}px`
          }, 50);
          box3.style.left = `-${offsetWidthBox * 2}px`;
          sliderFlag++;
        }

        else if (sliderFlag === 2) {
          box1.style.left = 0;
          box2.style.left = 0;
          box3.style.left = 0;
          sliderFlag = 0;
          leftFlag = false
        }
      }
    }
  }
  render() {
    return (
      <section className={this.props.classes}>
        <div className="text__wrap">
          <h2 className={`${this.props.classes}__title`}>Heading</h2>
          <p className={`${this.props.classes}__text`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="wrapBox">
          {this.props.button ? <button onClick={() => this.handleClickBox('left')} className='btn'><i class="fas fa-chevron-left"></i></button> : null}
          <div className="wrapBoxes">
            {boxes.map(box =>
              <Box
                key={box.id}
                heading={box.heading}
                text={box.text}
                logoImg={this.props.logoImg}
                id={box.id}
              />)}
          </div>
          {this.props.button ? <button onClick={() => this.handleClickBox('right')} className='btn'><i class="fas fa-chevron-right"></i></button> : null}
        </div>
        <div className="point"></div>
      </section>
    )
  }
}

export default Heading;
