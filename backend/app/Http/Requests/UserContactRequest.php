<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserContactRequest extends FormRequest
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

            'username' => 'required',
            'phone' => 'required|min:11|max:15',
            'email' => 'required',
            'message' => 'required'
        ];
    }
}
