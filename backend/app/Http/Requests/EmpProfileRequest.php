<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmpProfileRequest extends FormRequest
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
            'firstname' => 'required|min:2|max:20',
            'lastname' => 'required|min:2|max:20',
            'gender' => 'required',
            'email' => 'required|email',
            'username' => 'required|min:4',
            'password' => 'required|min:4',
            'conPassword' => 'required_with:password|same:password|min:4'
        ];
    }
}
