<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FlightProfileRequest extends FormRequest
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
            'name' => 'required|min:2',
            'phone' => 'required|min:2|max:15',
            'email' => 'required',
            'type' => 'required',
            'conPassword' => 'required|min:4|max:20',
            'conPassword' => 'required_with:password|same:password|min:4'
        ];
    }
}
