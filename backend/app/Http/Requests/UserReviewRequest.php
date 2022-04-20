<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'service_id' => 'required',
            'service_type' => 'required',
            'company' => 'required',
            'user_id' => 'required',
            'rating' => 'required',
            'msg' => 'required'
        ];
    }
}
