import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import withFormData from '../../hocs/with-form-data/with-form-data.jsx';


class ReviewSubmit extends PureComponent {
  constructor(props) {
    super(props);

    this._formRef = createRef();
    this._ratingRef = createRef();
    this._reviewRef = createRef();
    this._buttonRef = createRef();

    this._placeId = props.placeId;

    this._onChange = props.onChange;
    this._setValid = props.setValid;
    this._onReviewSubmit = props.onReviewSubmit;

    this._changeHandler = this._changeHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
    this._validate = this._validate.bind(this);
  }


  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        ref={this._formRef}
        onSubmit={this._submitHandler}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            onChange={this._changeHandler}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            onChange={this._changeHandler}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            ref={this._ratingRef}
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            onChange={this._changeHandler}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            id="2-stars"
            type="radio"
            onChange={this._changeHandler}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value="1"
            id="1-star"
            type="radio"
            onChange={this._changeHandler}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          ref={this._reviewRef}
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._changeHandler}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            ref={this._buttonRef}
            type="submit"
            disabled={!this.props.formData.isValid}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  _changeHandler(evt) {
    this._onChange(evt, this._validate);
  }

  _submitHandler(evt) {
    evt.preventDefault();

    const review = {
      rating: parseInt(this.props.formData.rating, 10),
      comment: this.props.formData.review,
    };
    this._onReviewSubmit(this._placeId, review);
    this._formRef.current.reset();
  }

  _validate(state) {
    if (state.review.length < 50 || state.review.length > 300) {
      this._setValid(false);
      this._reviewRef.current
        .setCustomValidity(`Review should be from 50 to 300 char long`);
    } else if (state.rating === undefined) {
      this._setValid(false);
      this._ratingRef.current
        .setCustomValidity(`You have to set a rating for the place`);
    } else {
      this._setValid(true);
      this._reviewRef.current.setCustomValidity(``);
      this._ratingRef.current.setCustomValidity(``);
    }
  }

}


ReviewSubmit.propTypes = {
  placeId: PropTypes.number.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired,
};

export {ReviewSubmit};
export default withFormData(ReviewSubmit);
