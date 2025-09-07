import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  clickedLeftImg = () => {
    const {count} = this.state
    if (count !== 0) {
      this.setState({count: count - 1})
    }
  }

  clickedRightImg = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState({count: count + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    return (
      <div className="mainContainer">
        <div className="cardItem">
          <ul>
            <li>
              <h1>Reviews</h1>

              <div className="miniCard">
                <button data-testId="leftArrow" type="button">
                  <img
                    onClick={this.clickedLeftImg}
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    alt="left arrow"
                    className="arrow"
                  />{' '}
                </button>
                <img
                  src={reviewsList[count].imgUrl}
                  alt={reviewsList[count].username}
                />

                <button data-testId="rightArrow" type="button">
                  {' '}
                  <img
                    onClick={this.clickedRightImg}
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    alt="right arrow"
                    className="arrow"
                  />{' '}
                </button>
              </div>
              <p>{reviewsList[count].companyName}</p>
              <p className="description">{reviewsList[count].description} </p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
